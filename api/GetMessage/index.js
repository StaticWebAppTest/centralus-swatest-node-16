module.exports = async function (context, req) {
  const date = "2024-12-11T18:17:45.081Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

