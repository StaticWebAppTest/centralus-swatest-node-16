module.exports = async function (context, req) {
  const date = "2023-09-19T03:09:14.671Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

