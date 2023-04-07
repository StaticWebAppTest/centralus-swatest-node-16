module.exports = async function (context, req) {
  const date = "2023-04-07T09:08:52.239Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

