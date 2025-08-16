module.exports = async function (context, req) {
  const date = "2025-08-16T14:11:27.381Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

