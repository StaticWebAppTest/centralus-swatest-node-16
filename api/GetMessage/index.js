module.exports = async function (context, req) {
  const date = "2023-01-17T20:09:40.631Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

