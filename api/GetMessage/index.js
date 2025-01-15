module.exports = async function (context, req) {
  const date = "2025-01-15T17:10:08.691Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

