module.exports = async function (context, req) {
  const date = "2024-04-12T19:08:04.526Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

