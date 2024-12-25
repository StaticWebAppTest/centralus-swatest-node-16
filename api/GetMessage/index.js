module.exports = async function (context, req) {
  const date = "2024-12-25T10:12:22.032Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

