module.exports = async function (context, req) {
  const date = "2022-09-04T12:22:23.381Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

