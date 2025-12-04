module.exports = async function (context, req) {
  const date = "2025-12-04T14:15:33.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

