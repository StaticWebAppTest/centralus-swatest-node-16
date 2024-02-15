module.exports = async function (context, req) {
  const date = "2024-02-15T18:11:51.785Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

