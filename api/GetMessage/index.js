module.exports = async function (context, req) {
  const date = "2023-02-20T10:12:10.290Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

