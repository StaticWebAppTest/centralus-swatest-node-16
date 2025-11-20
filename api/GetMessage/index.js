module.exports = async function (context, req) {
  const date = "2025-11-20T13:25:45.605Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

