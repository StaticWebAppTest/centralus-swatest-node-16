module.exports = async function (context, req) {
  const date = "2025-04-25T11:10:42.969Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

