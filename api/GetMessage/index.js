module.exports = async function (context, req) {
  const date = "2025-02-11T14:11:56.005Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

