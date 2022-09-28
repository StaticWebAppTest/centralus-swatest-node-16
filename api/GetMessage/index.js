module.exports = async function (context, req) {
  const date = "2022-09-28T19:15:53.298Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

