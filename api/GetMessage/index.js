module.exports = async function (context, req) {
  const date = "2022-08-08T21:09:55.216Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

