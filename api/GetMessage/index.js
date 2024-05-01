module.exports = async function (context, req) {
  const date = "2024-05-01T20:11:43.745Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

