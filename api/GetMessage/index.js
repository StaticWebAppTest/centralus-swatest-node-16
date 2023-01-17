module.exports = async function (context, req) {
  const date = "2023-01-17T22:09:22.796Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

