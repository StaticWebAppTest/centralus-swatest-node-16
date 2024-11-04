module.exports = async function (context, req) {
  const date = "2024-11-04T11:11:46.229Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

