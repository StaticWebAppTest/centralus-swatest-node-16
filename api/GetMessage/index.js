module.exports = async function (context, req) {
  const date = "2024-04-04T20:09:43.723Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

