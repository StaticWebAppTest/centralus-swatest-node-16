module.exports = async function (context, req) {
  const date = "2024-04-24T11:08:26.303Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

