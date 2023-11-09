module.exports = async function (context, req) {
  const date = "2023-11-09T22:08:18.216Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

