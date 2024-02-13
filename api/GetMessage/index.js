module.exports = async function (context, req) {
  const date = "2024-02-13T15:08:16.538Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

