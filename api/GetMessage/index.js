module.exports = async function (context, req) {
  const date = "2023-07-13T17:08:55.081Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

