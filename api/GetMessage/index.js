module.exports = async function (context, req) {
  const date = "2023-05-10T01:58:46.265Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

