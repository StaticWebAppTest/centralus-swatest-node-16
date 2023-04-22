module.exports = async function (context, req) {
  const date = "2023-04-22T19:06:49.370Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

