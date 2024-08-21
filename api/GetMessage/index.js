module.exports = async function (context, req) {
  const date = "2024-08-21T05:10:47.129Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

