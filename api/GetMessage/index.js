module.exports = async function (context, req) {
  const date = "2025-05-29T08:18:30.401Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

