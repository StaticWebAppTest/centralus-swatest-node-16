module.exports = async function (context, req) {
  const date = "2022-10-13T07:27:48.076Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

