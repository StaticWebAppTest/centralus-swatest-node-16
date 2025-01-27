module.exports = async function (context, req) {
  const date = "2025-01-27T11:10:08.400Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

