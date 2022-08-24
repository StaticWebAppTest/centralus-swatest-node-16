module.exports = async function (context, req) {
  const date = "2022-08-24T08:14:12.317Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

