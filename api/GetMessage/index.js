module.exports = async function (context, req) {
  const date = "2023-12-12T04:11:26.239Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

