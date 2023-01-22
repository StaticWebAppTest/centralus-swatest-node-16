module.exports = async function (context, req) {
  const date = "2023-01-22T18:10:44.038Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

