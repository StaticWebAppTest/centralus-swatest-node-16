module.exports = async function (context, req) {
  const date = "2025-04-24T11:11:19.400Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

