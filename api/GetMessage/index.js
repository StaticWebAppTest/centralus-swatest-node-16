module.exports = async function (context, req) {
  const date = "2024-02-26T17:08:42.751Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

