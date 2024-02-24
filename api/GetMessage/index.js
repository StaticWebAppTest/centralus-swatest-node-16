module.exports = async function (context, req) {
  const date = "2024-02-24T04:10:54.216Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

