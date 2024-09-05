module.exports = async function (context, req) {
  const date = "2024-09-05T04:13:36.862Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

