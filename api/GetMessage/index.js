module.exports = async function (context, req) {
  const date = "2025-05-23T03:06:57.896Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

