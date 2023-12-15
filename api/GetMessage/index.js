module.exports = async function (context, req) {
  const date = "2023-12-15T05:09:14.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

