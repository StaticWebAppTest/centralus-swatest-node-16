module.exports = async function (context, req) {
  const date = "2022-08-20T16:13:40.216Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

