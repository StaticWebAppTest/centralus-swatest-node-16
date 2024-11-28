module.exports = async function (context, req) {
  const date = "2024-11-28T05:12:44.381Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

