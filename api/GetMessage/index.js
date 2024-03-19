module.exports = async function (context, req) {
  const date = "2024-03-19T05:09:33.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

