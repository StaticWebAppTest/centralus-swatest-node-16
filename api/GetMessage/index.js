module.exports = async function (context, req) {
  const date = "2024-09-13T18:14:56.648Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

