module.exports = async function (context, req) {
  const date = "2024-08-22T08:13:47.396Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

