module.exports = async function (context, req) {
  const date = "2024-11-06T06:16:46.238Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

