module.exports = async function (context, req) {
  const date = "2024-06-20T14:09:19.027Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

