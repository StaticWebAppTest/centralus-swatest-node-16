module.exports = async function (context, req) {
  const date = "2024-07-13T10:09:45.216Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

