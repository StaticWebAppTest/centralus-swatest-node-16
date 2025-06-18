module.exports = async function (context, req) {
  const date = "2025-06-18T09:15:17.561Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

