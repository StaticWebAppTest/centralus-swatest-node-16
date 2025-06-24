module.exports = async function (context, req) {
  const date = "2025-06-24T12:28:14.533Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

