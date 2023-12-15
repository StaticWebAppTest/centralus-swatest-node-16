module.exports = async function (context, req) {
  const date = "2023-12-15T13:11:57.229Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

