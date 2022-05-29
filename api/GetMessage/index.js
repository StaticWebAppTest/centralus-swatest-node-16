module.exports = async function (context, req) {
  const date = "2022-05-29T12:18:39.285Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

