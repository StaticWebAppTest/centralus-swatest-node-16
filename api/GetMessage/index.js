module.exports = async function (context, req) {
  const date = "2025-03-12T10:13:11.633Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

