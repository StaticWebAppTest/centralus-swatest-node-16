module.exports = async function (context, req) {
  const date = "2024-02-17T23:08:09.309Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

