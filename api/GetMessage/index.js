module.exports = async function (context, req) {
  const date = "2022-03-04T02:13:35.135Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

