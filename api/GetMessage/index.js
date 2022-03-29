module.exports = async function (context, req) {
  const date = "2022-03-29T05:10:46.131Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

