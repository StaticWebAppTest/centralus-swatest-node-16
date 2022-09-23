module.exports = async function (context, req) {
  const date = "2022-09-23T22:15:39.381Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

