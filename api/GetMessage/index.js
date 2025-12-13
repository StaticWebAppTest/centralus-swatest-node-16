module.exports = async function (context, req) {
  const date = "2025-12-13T15:13:02.438Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

