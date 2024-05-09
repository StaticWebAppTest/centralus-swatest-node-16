module.exports = async function (context, req) {
  const date = "2024-05-09T18:10:59.081Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

