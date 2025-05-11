module.exports = async function (context, req) {
  const date = "2025-05-11T21:11:18.381Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

