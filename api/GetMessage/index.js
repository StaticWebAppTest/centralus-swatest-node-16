module.exports = async function (context, req) {
  const date = "2023-08-10T06:12:04.216Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

