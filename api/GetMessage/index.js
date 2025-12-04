module.exports = async function (context, req) {
  const date = "2025-12-04T18:22:57.124Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

