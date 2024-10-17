module.exports = async function (context, req) {
  const date = "2024-10-17T17:10:35.701Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

