module.exports = async function (context, req) {
  const date = "2024-06-22T05:11:20.792Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

