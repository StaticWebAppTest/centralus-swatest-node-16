module.exports = async function (context, req) {
  const date = "2025-01-11T07:10:00.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

