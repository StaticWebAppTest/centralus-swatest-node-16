module.exports = async function (context, req) {
  const date = "2025-03-24T14:12:46.561Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

