module.exports = async function (context, req) {
  const date = "2024-08-13T16:13:00.438Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

