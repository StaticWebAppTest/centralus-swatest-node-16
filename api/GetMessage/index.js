module.exports = async function (context, req) {
  const date = "2025-06-10T12:28:03.093Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

