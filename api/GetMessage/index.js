module.exports = async function (context, req) {
  const date = "2022-09-23T16:17:15.858Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

