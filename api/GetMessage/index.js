module.exports = async function (context, req) {
  const date = "2024-12-22T08:13:50.581Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

