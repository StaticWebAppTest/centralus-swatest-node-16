module.exports = async function (context, req) {
  const date = "2024-11-13T18:15:22.861Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

