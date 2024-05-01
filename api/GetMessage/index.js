module.exports = async function (context, req) {
  const date = "2024-05-01T07:10:50.077Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

