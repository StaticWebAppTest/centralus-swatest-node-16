module.exports = async function (context, req) {
  const date = "2023-10-01T04:10:15.309Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

