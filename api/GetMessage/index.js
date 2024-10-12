module.exports = async function (context, req) {
  const date = "2024-10-12T11:08:36.890Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

