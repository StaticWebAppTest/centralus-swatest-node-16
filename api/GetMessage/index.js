module.exports = async function (context, req) {
  const date = "2024-12-28T02:11:02.400Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

