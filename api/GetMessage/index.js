module.exports = async function (context, req) {
  const date = "2023-04-09T03:09:17.461Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

