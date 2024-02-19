module.exports = async function (context, req) {
  const date = "2024-02-19T20:09:11.381Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

