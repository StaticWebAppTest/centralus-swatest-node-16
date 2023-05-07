module.exports = async function (context, req) {
  const date = "2023-05-07T05:08:16.898Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

