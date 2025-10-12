module.exports = async function (context, req) {
  const date = "2025-10-12T11:09:00.457Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

