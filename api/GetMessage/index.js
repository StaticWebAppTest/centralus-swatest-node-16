module.exports = async function (context, req) {
  const date = "2022-09-18T10:12:29.942Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

