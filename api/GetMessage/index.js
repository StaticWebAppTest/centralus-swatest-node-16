module.exports = async function (context, req) {
  const date = "2022-07-28T12:25:14.766Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

