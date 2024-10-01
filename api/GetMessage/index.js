module.exports = async function (context, req) {
  const date = "2024-10-01T07:12:22.956Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

