module.exports = async function (context, req) {
  const date = "2023-11-05T02:20:42.004Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

