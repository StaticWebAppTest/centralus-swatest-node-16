module.exports = async function (context, req) {
  const date = "2024-06-12T02:30:06.891Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

