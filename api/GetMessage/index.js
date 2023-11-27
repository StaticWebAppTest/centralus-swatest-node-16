module.exports = async function (context, req) {
  const date = "2023-11-27T21:08:19.166Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

