module.exports = async function (context, req) {
  const date = "2023-07-28T23:08:10.012Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

