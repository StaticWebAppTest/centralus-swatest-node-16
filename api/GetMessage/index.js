module.exports = async function (context, req) {
  const date = "2025-05-27T21:12:38.449Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

