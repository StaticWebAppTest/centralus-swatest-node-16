module.exports = async function (context, req) {
  const date = "2022-09-29T07:30:35.942Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

