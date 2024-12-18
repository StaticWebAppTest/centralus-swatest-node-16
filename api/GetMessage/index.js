module.exports = async function (context, req) {
  const date = "2024-12-18T11:10:26.077Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

