module.exports = async function (context, req) {
  const date = "2023-01-19T18:14:11.184Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

