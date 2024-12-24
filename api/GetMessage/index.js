module.exports = async function (context, req) {
  const date = "2024-12-24T18:15:25.007Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

