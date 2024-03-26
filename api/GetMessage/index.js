module.exports = async function (context, req) {
  const date = "2024-03-26T17:07:58.581Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

