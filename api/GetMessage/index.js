module.exports = async function (context, req) {
  const date = "2024-04-02T18:11:34.436Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

