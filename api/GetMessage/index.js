module.exports = async function (context, req) {
  const date = "2024-12-18T18:17:21.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

