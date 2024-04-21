module.exports = async function (context, req) {
  const date = "2024-04-21T17:08:50.081Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

