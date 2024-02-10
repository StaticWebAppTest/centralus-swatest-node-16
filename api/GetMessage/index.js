module.exports = async function (context, req) {
  const date = "2024-02-10T14:07:43.817Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

