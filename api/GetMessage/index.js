module.exports = async function (context, req) {
  const date = "2023-10-17T14:08:34.895Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

