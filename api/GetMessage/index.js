module.exports = async function (context, req) {
  const date = "2022-03-29T22:10:07.415Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

