module.exports = async function (context, req) {
  const date = "2023-10-16T11:07:38.474Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

