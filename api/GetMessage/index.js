module.exports = async function (context, req) {
  const date = "2023-01-29T04:11:11.047Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

