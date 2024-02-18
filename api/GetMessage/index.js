module.exports = async function (context, req) {
  const date = "2024-02-18T16:10:46.482Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

