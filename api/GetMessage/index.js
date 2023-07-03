module.exports = async function (context, req) {
  const date = "2023-07-03T16:12:25.421Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

