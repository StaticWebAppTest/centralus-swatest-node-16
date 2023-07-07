module.exports = async function (context, req) {
  const date = "2023-07-07T07:09:24.065Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

