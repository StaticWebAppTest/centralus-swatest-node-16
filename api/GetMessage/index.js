module.exports = async function (context, req) {
  const date = "2024-07-24T00:50:50.907Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

