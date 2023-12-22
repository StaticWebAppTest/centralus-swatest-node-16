module.exports = async function (context, req) {
  const date = "2023-12-22T22:08:25.448Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

