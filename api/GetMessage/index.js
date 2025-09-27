module.exports = async function (context, req) {
  const date = "2025-09-27T12:22:30.732Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

