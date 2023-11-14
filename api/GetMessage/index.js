module.exports = async function (context, req) {
  const date = "2023-11-14T21:06:55.158Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

