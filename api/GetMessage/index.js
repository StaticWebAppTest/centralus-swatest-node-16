module.exports = async function (context, req) {
  const date = "2025-06-02T19:10:30.381Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

