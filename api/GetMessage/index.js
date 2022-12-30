module.exports = async function (context, req) {
  const date = "2022-12-30T17:08:14.643Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

