module.exports = async function (context, req) {
  const date = "2025-02-03T14:11:42.832Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

