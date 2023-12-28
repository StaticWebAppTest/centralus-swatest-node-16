module.exports = async function (context, req) {
  const date = "2023-12-28T12:16:05.764Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

