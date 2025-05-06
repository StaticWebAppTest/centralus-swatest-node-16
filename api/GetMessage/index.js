module.exports = async function (context, req) {
  const date = "2025-05-06T11:11:20.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

