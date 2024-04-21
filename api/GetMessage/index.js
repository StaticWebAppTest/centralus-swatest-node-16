module.exports = async function (context, req) {
  const date = "2024-04-21T21:08:27.235Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

