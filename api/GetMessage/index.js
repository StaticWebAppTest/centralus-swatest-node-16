module.exports = async function (context, req) {
  const date = "2023-03-13T05:09:34.216Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

