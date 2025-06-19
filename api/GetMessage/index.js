module.exports = async function (context, req) {
  const date = "2025-06-19T13:27:15.401Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

