module.exports = async function (context, req) {
  const date = "2023-02-07T18:12:01.967Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

