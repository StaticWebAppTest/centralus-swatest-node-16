module.exports = async function (context, req) {
  const date = "2024-12-08T18:15:35.279Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

