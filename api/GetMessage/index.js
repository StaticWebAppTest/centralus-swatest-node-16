module.exports = async function (context, req) {
  const date = "2024-04-10T20:09:43.787Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

