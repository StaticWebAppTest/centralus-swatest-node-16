module.exports = async function (context, req) {
  const date = "2024-03-12T20:09:46.868Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

