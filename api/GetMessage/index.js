module.exports = async function (context, req) {
  const date = "2025-11-25T11:12:31.732Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

