module.exports = async function (context, req) {
  const date = "2023-10-30T02:17:54.560Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

