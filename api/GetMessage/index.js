module.exports = async function (context, req) {
  const date = "2024-03-28T18:11:39.309Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

