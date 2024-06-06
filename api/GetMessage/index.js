module.exports = async function (context, req) {
  const date = "2024-06-06T09:11:53.216Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

