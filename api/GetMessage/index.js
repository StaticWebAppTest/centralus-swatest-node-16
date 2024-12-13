module.exports = async function (context, req) {
  const date = "2024-12-13T16:15:23.998Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

