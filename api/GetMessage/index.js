module.exports = async function (context, req) {
  const date = "2023-07-30T23:08:10.551Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

