module.exports = async function (context, req) {
  const date = "2024-06-02T03:11:36.487Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

