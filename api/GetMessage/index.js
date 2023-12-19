module.exports = async function (context, req) {
  const date = "2023-12-19T14:08:46.381Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

