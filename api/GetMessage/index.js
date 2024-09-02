module.exports = async function (context, req) {
  const date = "2024-09-02T00:54:23.366Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

