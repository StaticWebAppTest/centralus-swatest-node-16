module.exports = async function (context, req) {
  const date = "2025-05-26T11:10:37.581Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

