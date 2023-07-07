module.exports = async function (context, req) {
  const date = "2023-07-07T15:10:04.643Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

