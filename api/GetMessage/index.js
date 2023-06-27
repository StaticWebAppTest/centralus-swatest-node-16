module.exports = async function (context, req) {
  const date = "2023-06-27T21:08:48.200Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

