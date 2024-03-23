module.exports = async function (context, req) {
  const date = "2024-03-23T22:08:33.641Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

