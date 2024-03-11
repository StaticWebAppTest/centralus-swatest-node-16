module.exports = async function (context, req) {
  const date = "2024-03-11T12:16:22.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

