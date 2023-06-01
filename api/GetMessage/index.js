module.exports = async function (context, req) {
  const date = "2023-06-01T01:08:06.077Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

