module.exports = async function (context, req) {
  const date = "2023-08-22T08:11:10.381Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

