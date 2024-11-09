module.exports = async function (context, req) {
  const date = "2024-11-09T14:09:59.405Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

