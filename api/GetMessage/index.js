module.exports = async function (context, req) {
  const date = "2025-10-18T14:10:28.540Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

