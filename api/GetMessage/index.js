module.exports = async function (context, req) {
  const date = "2024-06-26T15:11:20.094Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

