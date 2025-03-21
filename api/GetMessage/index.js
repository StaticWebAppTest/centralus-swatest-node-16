module.exports = async function (context, req) {
  const date = "2025-03-21T11:10:46.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

