module.exports = async function (context, req) {
  const date = "2022-09-30T16:21:20.298Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

