module.exports = async function (context, req) {
  const date = "2023-07-30T13:08:58.051Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

