module.exports = async function (context, req) {
  const date = "2023-08-19T03:09:09.671Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

