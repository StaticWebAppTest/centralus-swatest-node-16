module.exports = async function (context, req) {
  const date = "2024-02-28T06:11:37.216Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

