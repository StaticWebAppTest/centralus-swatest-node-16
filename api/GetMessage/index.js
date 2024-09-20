module.exports = async function (context, req) {
  const date = "2024-09-20T17:10:01.569Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

