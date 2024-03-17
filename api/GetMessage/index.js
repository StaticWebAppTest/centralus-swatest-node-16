module.exports = async function (context, req) {
  const date = "2024-03-17T00:44:21.824Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

