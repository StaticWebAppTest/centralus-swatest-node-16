module.exports = async function (context, req) {
  const date = "2024-01-22T21:08:38.396Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

