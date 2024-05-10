module.exports = async function (context, req) {
  const date = "2024-05-10T12:17:00.238Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

