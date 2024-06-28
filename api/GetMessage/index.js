module.exports = async function (context, req) {
  const date = "2024-06-28T09:11:05.265Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

