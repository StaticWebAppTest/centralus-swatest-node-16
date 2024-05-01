module.exports = async function (context, req) {
  const date = "2024-05-01T08:14:48.438Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

