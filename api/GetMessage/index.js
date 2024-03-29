module.exports = async function (context, req) {
  const date = "2024-03-29T06:11:55.557Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

