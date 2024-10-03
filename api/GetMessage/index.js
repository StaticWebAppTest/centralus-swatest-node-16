module.exports = async function (context, req) {
  const date = "2024-10-03T10:12:40.641Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

