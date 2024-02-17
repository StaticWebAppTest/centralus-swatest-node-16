module.exports = async function (context, req) {
  const date = "2024-02-17T13:08:49.099Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

