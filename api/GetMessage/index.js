module.exports = async function (context, req) {
  const date = "2024-11-24T13:17:57.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

