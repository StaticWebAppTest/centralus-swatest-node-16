module.exports = async function (context, req) {
  const date = "2023-07-03T22:09:42.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

