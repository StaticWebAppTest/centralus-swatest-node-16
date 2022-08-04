module.exports = async function (context, req) {
  const date = "2022-08-04T13:33:14.463Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

