module.exports = async function (context, req) {
  const date = "2024-07-20T06:15:18.787Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

