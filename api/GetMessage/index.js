module.exports = async function (context, req) {
  const date = "2025-12-21T15:13:01.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

