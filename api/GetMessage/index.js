module.exports = async function (context, req) {
  const date = "2024-02-13T07:08:59.139Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

