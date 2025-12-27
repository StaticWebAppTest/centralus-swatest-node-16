module.exports = async function (context, req) {
  const date = "2025-12-27T01:08:30.896Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

