module.exports = async function (context, req) {
  const date = "2022-09-06T11:10:19.298Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

