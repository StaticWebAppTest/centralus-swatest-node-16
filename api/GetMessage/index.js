module.exports = async function (context, req) {
  const date = "2024-04-02T07:10:59.216Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

