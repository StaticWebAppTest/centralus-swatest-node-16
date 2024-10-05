module.exports = async function (context, req) {
  const date = "2024-10-05T04:14:27.049Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

