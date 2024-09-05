module.exports = async function (context, req) {
  const date = "2024-09-05T16:14:04.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

