module.exports = async function (context, req) {
  const date = "2023-01-20T18:11:55.923Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

