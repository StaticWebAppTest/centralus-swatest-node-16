module.exports = async function (context, req) {
  const date = "2022-11-25T15:10:09.381Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

