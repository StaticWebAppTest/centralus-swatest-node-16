module.exports = async function (context, req) {
  const date = "2023-06-30T18:11:55.298Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

