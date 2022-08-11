module.exports = async function (context, req) {
  const date = "2022-08-11T14:09:38.884Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

