module.exports = async function (context, req) {
  const date = "2024-04-11T17:08:47.081Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

