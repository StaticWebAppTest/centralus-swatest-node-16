module.exports = async function (context, req) {
  const date = "2025-02-18T14:11:42.148Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

