module.exports = async function (context, req) {
  const date = "2024-09-28T08:14:07.265Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

