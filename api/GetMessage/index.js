module.exports = async function (context, req) {
  const date = "2025-01-11T09:11:02.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

