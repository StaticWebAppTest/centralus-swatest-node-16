module.exports = async function (context, req) {
  const date = "2025-03-09T15:10:42.960Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

