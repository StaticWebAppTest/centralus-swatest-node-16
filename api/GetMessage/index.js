module.exports = async function (context, req) {
  const date = "2025-01-04T21:10:28.876Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

