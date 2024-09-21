module.exports = async function (context, req) {
  const date = "2024-09-21T11:08:34.238Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

