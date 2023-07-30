module.exports = async function (context, req) {
  const date = "2023-07-30T07:07:30.159Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

