module.exports = async function (context, req) {
  const date = "2024-01-03T03:10:03.441Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

