module.exports = async function (context, req) {
  const date = "2024-04-28T04:11:01.181Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

