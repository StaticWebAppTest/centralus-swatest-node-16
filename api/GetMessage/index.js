module.exports = async function (context, req) {
  const date = "2022-05-04T10:13:57.768Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

