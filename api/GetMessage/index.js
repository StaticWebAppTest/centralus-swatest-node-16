module.exports = async function (context, req) {
  const date = "2023-11-26T18:10:27.265Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

