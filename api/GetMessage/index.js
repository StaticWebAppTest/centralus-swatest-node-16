module.exports = async function (context, req) {
  const date = "2025-02-08T18:13:58.174Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

