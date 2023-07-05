module.exports = async function (context, req) {
  const date = "2023-07-05T12:22:42.106Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

