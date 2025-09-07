module.exports = async function (context, req) {
  const date = "2025-09-07T17:09:17.570Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

