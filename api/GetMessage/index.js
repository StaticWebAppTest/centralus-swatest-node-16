module.exports = async function (context, req) {
  const date = "2023-07-22T20:08:28.729Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

