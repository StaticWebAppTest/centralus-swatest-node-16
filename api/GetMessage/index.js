module.exports = async function (context, req) {
  const date = "2025-03-04T07:12:56.960Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

