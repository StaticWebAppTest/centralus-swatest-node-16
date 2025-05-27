module.exports = async function (context, req) {
  const date = "2025-05-27T18:17:46.691Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

