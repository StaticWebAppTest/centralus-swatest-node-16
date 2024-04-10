module.exports = async function (context, req) {
  const date = "2024-04-10T22:10:25.216Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

