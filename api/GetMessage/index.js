module.exports = async function (context, req) {
  const date = "2024-11-19T12:23:36.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

