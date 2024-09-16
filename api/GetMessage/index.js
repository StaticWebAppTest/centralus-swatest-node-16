module.exports = async function (context, req) {
  const date = "2024-09-16T14:11:02.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

