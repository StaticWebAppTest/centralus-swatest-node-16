module.exports = async function (context, req) {
  const date = "2023-02-05T20:09:16.477Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

