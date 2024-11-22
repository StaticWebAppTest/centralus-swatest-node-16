module.exports = async function (context, req) {
  const date = "2024-11-22T18:17:13.838Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

