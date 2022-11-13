module.exports = async function (context, req) {
  const date = "2022-11-13T00:59:48.722Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

