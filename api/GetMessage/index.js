module.exports = async function (context, req) {
  const date = "2024-04-12T08:11:46.089Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

