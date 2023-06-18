module.exports = async function (context, req) {
  const date = "2023-06-18T18:10:16.309Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

