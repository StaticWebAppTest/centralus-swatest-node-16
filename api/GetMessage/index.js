module.exports = async function (context, req) {
  const date = "2025-05-03T23:11:46.570Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

