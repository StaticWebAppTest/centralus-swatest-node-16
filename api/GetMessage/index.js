module.exports = async function (context, req) {
  const date = "2025-03-03T14:12:33.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

