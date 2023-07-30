module.exports = async function (context, req) {
  const date = "2023-07-30T02:27:10.643Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

