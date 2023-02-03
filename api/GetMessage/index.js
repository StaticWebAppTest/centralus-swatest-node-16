module.exports = async function (context, req) {
  const date = "2023-02-03T10:10:19.919Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

