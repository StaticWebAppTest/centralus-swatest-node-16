module.exports = async function (context, req) {
  const date = "2025-06-25T12:28:23.732Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

