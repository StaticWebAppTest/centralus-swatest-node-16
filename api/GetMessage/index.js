module.exports = async function (context, req) {
  const date = "2025-06-25T15:14:50.067Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

