module.exports = async function (context, req) {
  const date = "2024-09-20T07:11:24.802Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

