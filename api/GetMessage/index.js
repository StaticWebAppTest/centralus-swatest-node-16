module.exports = async function (context, req) {
  const date = "2024-03-11T15:09:58.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

