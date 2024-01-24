module.exports = async function (context, req) {
  const date = "2024-01-24T15:10:22.122Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

