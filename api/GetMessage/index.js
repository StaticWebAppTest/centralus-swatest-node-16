module.exports = async function (context, req) {
  const date = "2023-12-07T22:09:01.190Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

