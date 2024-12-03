module.exports = async function (context, req) {
  const date = "2024-12-03T05:12:37.948Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

