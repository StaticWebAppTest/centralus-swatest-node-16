module.exports = async function (context, req) {
  const date = "2025-12-11T08:21:20.386Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

