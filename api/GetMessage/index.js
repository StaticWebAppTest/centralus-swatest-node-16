module.exports = async function (context, req) {
  const date = "2024-02-15T09:11:20.817Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

