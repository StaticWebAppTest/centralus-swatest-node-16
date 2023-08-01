module.exports = async function (context, req) {
  const date = "2023-08-01T05:08:36.515Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

