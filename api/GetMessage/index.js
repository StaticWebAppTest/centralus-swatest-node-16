module.exports = async function (context, req) {
  const date = "2024-01-14T07:08:08.302Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

