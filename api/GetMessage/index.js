module.exports = async function (context, req) {
  const date = "2025-03-10T16:13:24.633Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

