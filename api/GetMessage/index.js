module.exports = async function (context, req) {
  const date = "2022-08-16T12:19:26.216Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

