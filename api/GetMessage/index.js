module.exports = async function (context, req) {
  const date = "2022-08-09T01:04:03.381Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

