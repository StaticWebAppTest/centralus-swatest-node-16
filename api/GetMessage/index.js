module.exports = async function (context, req) {
  const date = "2024-05-23T05:11:55.283Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

