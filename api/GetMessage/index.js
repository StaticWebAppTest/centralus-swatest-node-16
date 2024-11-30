module.exports = async function (context, req) {
  const date = "2024-11-30T17:09:44.551Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

