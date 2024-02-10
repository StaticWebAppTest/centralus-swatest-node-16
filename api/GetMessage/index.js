module.exports = async function (context, req) {
  const date = "2024-02-10T11:06:50.953Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

