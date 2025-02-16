module.exports = async function (context, req) {
  const date = "2025-02-16T15:10:27.401Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

