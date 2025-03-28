module.exports = async function (context, req) {
  const date = "2025-03-28T15:13:07.112Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

