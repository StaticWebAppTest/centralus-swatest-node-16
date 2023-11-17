module.exports = async function (context, req) {
  const date = "2023-11-17T22:09:32.906Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

