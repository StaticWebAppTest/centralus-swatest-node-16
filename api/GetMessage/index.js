module.exports = async function (context, req) {
  const date = "2023-08-28T07:08:32.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

