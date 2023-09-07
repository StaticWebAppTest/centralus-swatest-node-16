module.exports = async function (context, req) {
  const date = "2023-09-07T07:08:29.495Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

