module.exports = async function (context, req) {
  const date = "2024-02-14T22:08:22.366Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

