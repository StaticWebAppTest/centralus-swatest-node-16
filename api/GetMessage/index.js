module.exports = async function (context, req) {
  const date = "2025-03-12T09:13:13.792Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

