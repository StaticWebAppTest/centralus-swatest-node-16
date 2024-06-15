module.exports = async function (context, req) {
  const date = "2024-06-15T07:10:49.360Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

