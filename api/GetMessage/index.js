module.exports = async function (context, req) {
  const date = "2025-09-12T15:12:31.932Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

