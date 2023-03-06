module.exports = async function (context, req) {
  const date = "2023-03-06T18:12:54.521Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

