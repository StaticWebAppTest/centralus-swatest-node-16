module.exports = async function (context, req) {
  const date = "2024-11-05T13:18:45.617Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

