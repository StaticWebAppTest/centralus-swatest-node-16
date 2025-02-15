module.exports = async function (context, req) {
  const date = "2025-02-15T17:10:02.051Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

