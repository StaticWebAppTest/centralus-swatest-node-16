module.exports = async function (context, req) {
  const date = "2023-11-03T18:11:39.007Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

