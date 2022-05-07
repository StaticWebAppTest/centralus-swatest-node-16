module.exports = async function (context, req) {
  const date = "2022-05-07T21:10:11.381Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

