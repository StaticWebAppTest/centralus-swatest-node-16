module.exports = async function (context, req) {
  const date = "2025-03-04T11:10:36.250Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

