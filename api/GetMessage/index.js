module.exports = async function (context, req) {
  const date = "2023-10-22T22:07:34.962Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

