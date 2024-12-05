module.exports = async function (context, req) {
  const date = "2024-12-05T23:12:41.731Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

