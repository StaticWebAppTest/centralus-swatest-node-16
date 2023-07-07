module.exports = async function (context, req) {
  const date = "2023-07-07T04:11:56.969Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

