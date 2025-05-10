module.exports = async function (context, req) {
  const date = "2025-05-10T18:15:51.366Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

