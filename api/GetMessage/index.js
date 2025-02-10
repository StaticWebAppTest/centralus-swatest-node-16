module.exports = async function (context, req) {
  const date = "2025-02-10T02:15:42.396Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

