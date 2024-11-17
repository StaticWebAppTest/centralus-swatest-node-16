module.exports = async function (context, req) {
  const date = "2024-11-17T18:14:39.348Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

