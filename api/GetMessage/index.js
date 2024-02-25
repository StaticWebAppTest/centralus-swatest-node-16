module.exports = async function (context, req) {
  const date = "2024-02-25T03:09:56.769Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

