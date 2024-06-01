module.exports = async function (context, req) {
  const date = "2024-06-01T16:10:56.691Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

