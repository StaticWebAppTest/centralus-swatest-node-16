module.exports = async function (context, req) {
  const date = "2025-03-28T13:21:36.460Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

