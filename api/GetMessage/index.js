module.exports = async function (context, req) {
  const date = "2025-05-03T17:10:22.862Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

