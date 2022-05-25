module.exports = async function (context, req) {
  const date = "2022-05-25T19:09:12.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

