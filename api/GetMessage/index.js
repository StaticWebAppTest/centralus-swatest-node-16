module.exports = async function (context, req) {
  const date = "2023-03-07T09:10:51.159Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

