module.exports = async function (context, req) {
  const date = "2025-12-19T17:13:45.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

