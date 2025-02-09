module.exports = async function (context, req) {
  const date = "2025-02-09T17:09:25.996Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

