module.exports = async function (context, req) {
  const date = "2025-02-28T04:15:08.918Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

