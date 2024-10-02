module.exports = async function (context, req) {
  const date = "2024-10-02T15:12:34.670Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

