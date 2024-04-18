module.exports = async function (context, req) {
  const date = "2024-04-18T17:08:35.415Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

