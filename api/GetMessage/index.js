module.exports = async function (context, req) {
  const date = "2022-09-29T18:19:06.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

