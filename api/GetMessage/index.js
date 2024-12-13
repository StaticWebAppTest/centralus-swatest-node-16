module.exports = async function (context, req) {
  const date = "2024-12-13T18:17:09.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

