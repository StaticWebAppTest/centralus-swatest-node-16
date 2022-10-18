module.exports = async function (context, req) {
  const date = "2022-10-18T10:16:48.298Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

