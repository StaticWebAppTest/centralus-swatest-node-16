module.exports = async function (context, req) {
  const date = "2024-09-10T04:13:38.620Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

