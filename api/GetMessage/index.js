module.exports = async function (context, req) {
  const date = "2024-11-21T08:16:04.091Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

