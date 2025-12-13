module.exports = async function (context, req) {
  const date = "2025-12-13T18:18:20.396Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

