module.exports = async function (context, req) {
  const date = "2025-05-30T23:12:25.423Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

