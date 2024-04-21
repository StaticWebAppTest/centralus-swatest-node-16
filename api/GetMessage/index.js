module.exports = async function (context, req) {
  const date = "2024-04-21T16:11:32.631Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

