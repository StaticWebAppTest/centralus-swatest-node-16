module.exports = async function (context, req) {
  const date = "2023-07-31T23:08:37.610Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

