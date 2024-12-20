module.exports = async function (context, req) {
  const date = "2024-12-20T23:10:41.396Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

