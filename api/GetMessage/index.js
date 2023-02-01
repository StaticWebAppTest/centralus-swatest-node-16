module.exports = async function (context, req) {
  const date = "2023-02-01T17:08:56.139Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

