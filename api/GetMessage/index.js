module.exports = async function (context, req) {
  const date = "2024-11-26T05:12:19.722Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

