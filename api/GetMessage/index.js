module.exports = async function (context, req) {
  const date = "2025-04-03T10:13:45.605Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

