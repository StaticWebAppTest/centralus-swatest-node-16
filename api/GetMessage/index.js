module.exports = async function (context, req) {
  const date = "2024-06-26T19:07:55.995Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

