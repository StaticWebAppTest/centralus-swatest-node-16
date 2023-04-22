module.exports = async function (context, req) {
  const date = "2023-04-22T23:08:28.334Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

