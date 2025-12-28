module.exports = async function (context, req) {
  const date = "2025-12-28T07:15:11.248Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

