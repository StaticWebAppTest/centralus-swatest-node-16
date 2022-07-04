module.exports = async function (context, req) {
  const date = "2022-07-04T12:21:53.216Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

