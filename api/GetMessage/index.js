module.exports = async function (context, req) {
  const date = "2024-07-22T06:15:27.787Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

