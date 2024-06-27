module.exports = async function (context, req) {
  const date = "2024-06-27T20:10:35.235Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

