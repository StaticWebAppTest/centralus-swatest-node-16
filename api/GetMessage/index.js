module.exports = async function (context, req) {
  const date = "2025-05-06T09:14:17.570Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

