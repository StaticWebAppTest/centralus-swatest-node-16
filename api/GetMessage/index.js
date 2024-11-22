module.exports = async function (context, req) {
  const date = "2024-11-22T11:10:42.320Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

