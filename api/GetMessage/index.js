module.exports = async function (context, req) {
  const date = "2023-03-21T16:10:08.381Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

