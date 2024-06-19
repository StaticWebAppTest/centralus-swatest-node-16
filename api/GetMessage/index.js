module.exports = async function (context, req) {
  const date = "2024-06-19T04:12:42.049Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

