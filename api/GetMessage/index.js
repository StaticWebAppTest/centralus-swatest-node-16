module.exports = async function (context, req) {
  const date = "2022-05-29T07:10:26.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

