module.exports = async function (context, req) {
  const date = "2022-08-06T09:09:55.298Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

