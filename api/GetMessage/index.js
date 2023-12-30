module.exports = async function (context, req) {
  const date = "2023-12-30T03:09:40.669Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

