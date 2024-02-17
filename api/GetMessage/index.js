module.exports = async function (context, req) {
  const date = "2024-02-17T17:08:24.703Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

