module.exports = async function (context, req) {
  const date = "2024-09-06T11:10:11.309Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

