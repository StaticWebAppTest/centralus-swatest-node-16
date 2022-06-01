module.exports = async function (context, req) {
  const date = "2022-06-01T05:12:16.049Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

