module.exports = async function (context, req) {
  const date = "2024-09-03T00:52:48.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

