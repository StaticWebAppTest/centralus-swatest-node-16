module.exports = async function (context, req) {
  const date = "2024-08-09T22:11:27.235Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

