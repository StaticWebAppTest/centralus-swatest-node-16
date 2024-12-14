module.exports = async function (context, req) {
  const date = "2024-12-14T06:16:20.373Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

