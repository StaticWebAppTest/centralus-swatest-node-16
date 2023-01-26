module.exports = async function (context, req) {
  const date = "2023-01-26T18:11:36.581Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

