module.exports = async function (context, req) {
  const date = "2024-02-12T03:09:54.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

