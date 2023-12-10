module.exports = async function (context, req) {
  const date = "2023-12-10T03:10:02.216Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

