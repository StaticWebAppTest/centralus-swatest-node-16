module.exports = async function (context, req) {
  const date = "2023-08-03T01:56:10.069Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

