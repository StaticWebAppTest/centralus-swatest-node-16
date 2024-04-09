module.exports = async function (context, req) {
  const date = "2024-04-09T20:09:11.071Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

