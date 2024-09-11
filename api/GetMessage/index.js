module.exports = async function (context, req) {
  const date = "2024-09-11T14:10:16.787Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

