module.exports = async function (context, req) {
  const date = "2024-06-24T15:11:19.764Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

