module.exports = async function (context, req) {
  const date = "2023-10-15T03:08:49.769Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

