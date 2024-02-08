module.exports = async function (context, req) {
  const date = "2024-02-08T17:09:24.139Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

