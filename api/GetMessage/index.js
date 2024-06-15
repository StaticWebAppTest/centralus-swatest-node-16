module.exports = async function (context, req) {
  const date = "2024-06-15T10:11:30.381Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

