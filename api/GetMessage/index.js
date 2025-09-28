module.exports = async function (context, req) {
  const date = "2025-09-28T13:17:23.438Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

