module.exports = async function (context, req) {
  const date = "2023-03-28T22:08:46.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

