module.exports = async function (context, req) {
  const date = "2023-06-03T18:09:59.967Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

