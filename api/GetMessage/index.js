module.exports = async function (context, req) {
  const date = "2022-03-30T03:25:22.010Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

