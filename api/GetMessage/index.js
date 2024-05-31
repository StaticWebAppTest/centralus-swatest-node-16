module.exports = async function (context, req) {
  const date = "2024-05-31T17:08:33.482Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

