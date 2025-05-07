module.exports = async function (context, req) {
  const date = "2025-05-07T20:14:45.960Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

