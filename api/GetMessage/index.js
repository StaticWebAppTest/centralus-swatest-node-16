module.exports = async function (context, req) {
  const date = "2024-07-13T11:09:08.027Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

