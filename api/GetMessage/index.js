module.exports = async function (context, req) {
  const date = "2022-06-25T10:10:34.942Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

