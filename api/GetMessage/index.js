module.exports = async function (context, req) {
  const date = "2023-01-05T05:09:16.111Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

