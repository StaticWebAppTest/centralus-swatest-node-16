module.exports = async function (context, req) {
  const date = "2024-05-01T22:09:26.461Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

