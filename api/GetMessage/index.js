module.exports = async function (context, req) {
  const date = "2025-04-11T12:25:09.847Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

