module.exports = async function (context, req) {
  const date = "2024-03-15T10:09:06.817Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

