module.exports = async function (context, req) {
  const date = "2024-09-25T10:13:24.503Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

