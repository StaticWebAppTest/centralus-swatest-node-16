module.exports = async function (context, req) {
  const date = "2023-05-16T07:08:43.027Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

