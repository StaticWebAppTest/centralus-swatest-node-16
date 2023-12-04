module.exports = async function (context, req) {
  const date = "2023-12-04T05:09:24.721Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

