module.exports = async function (context, req) {
  const date = "2025-12-13T11:10:53.079Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

