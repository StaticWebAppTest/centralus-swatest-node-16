module.exports = async function (context, req) {
  const date = "2024-06-20T17:08:53.772Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

