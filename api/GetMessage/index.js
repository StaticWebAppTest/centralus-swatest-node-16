module.exports = async function (context, req) {
  const date = "2023-07-01T06:12:26.771Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

