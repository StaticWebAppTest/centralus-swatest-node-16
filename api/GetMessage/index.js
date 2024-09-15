module.exports = async function (context, req) {
  const date = "2024-09-15T20:11:39.216Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

