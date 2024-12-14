module.exports = async function (context, req) {
  const date = "2024-12-14T08:14:52.639Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

