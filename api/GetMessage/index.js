module.exports = async function (context, req) {
  const date = "2024-08-17T17:08:34.767Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

