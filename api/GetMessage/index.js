module.exports = async function (context, req) {
  const date = "2022-12-09T08:12:42.135Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

