module.exports = async function (context, req) {
  const date = "2024-10-23T08:15:49.308Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

