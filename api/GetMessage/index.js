module.exports = async function (context, req) {
  const date = "2024-04-11T14:08:39.216Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

