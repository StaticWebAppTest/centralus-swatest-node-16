module.exports = async function (context, req) {
  const date = "2024-10-16T17:11:21.309Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

