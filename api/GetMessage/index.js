module.exports = async function (context, req) {
  const date = "2024-12-28T20:11:35.216Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

