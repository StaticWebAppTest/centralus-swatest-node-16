module.exports = async function (context, req) {
  const date = "2025-02-28T11:10:12.563Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

