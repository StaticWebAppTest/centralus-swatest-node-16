module.exports = async function (context, req) {
  const date = "2025-02-24T07:12:14.503Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

