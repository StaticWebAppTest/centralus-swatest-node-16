module.exports = async function (context, req) {
  const date = "2024-05-21T03:11:19.073Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

