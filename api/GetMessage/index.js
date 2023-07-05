module.exports = async function (context, req) {
  const date = "2023-07-05T04:12:42.017Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

