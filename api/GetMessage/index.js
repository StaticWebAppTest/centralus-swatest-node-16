module.exports = async function (context, req) {
  const date = "2024-05-30T12:18:23.229Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

