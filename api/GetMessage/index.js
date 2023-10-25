module.exports = async function (context, req) {
  const date = "2023-10-25T17:07:06.027Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

