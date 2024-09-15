module.exports = async function (context, req) {
  const date = "2024-09-15T05:11:21.143Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

