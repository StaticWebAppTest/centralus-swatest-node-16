module.exports = async function (context, req) {
  const date = "2022-12-27T19:07:21.858Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

