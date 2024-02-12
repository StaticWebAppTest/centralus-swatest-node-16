module.exports = async function (context, req) {
  const date = "2024-02-12T14:08:18.027Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

