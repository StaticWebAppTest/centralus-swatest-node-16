module.exports = async function (context, req) {
  const date = "2024-07-07T16:11:16.240Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

