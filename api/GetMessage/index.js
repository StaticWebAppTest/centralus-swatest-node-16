module.exports = async function (context, req) {
  const date = "2025-01-12T07:10:10.435Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

