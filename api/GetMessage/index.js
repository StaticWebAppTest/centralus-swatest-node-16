module.exports = async function (context, req) {
  const date = "2023-07-30T11:06:32.963Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

