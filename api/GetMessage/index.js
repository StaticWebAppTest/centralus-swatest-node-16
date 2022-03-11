module.exports = async function (context, req) {
  const date = "2022-03-11T12:16:38.298Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

