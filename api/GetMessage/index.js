module.exports = async function (context, req) {
  const date = "2024-06-11T10:11:23.123Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

