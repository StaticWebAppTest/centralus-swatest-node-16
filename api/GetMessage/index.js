module.exports = async function (context, req) {
  const date = "2024-01-06T16:10:33.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

