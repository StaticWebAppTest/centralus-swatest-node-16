module.exports = async function (context, req) {
  const date = "2023-11-20T21:08:37.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

