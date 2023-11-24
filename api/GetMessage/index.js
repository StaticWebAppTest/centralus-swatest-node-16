module.exports = async function (context, req) {
  const date = "2023-11-24T03:09:46.711Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

