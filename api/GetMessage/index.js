module.exports = async function (context, req) {
  const date = "2022-12-15T03:14:48.058Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

