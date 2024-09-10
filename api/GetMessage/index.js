module.exports = async function (context, req) {
  const date = "2024-09-10T02:08:54.216Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

