module.exports = async function (context, req) {
  const date = "2022-09-04T10:11:40.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

