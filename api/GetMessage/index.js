module.exports = async function (context, req) {
  const date = "2025-11-28T14:13:38.876Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

