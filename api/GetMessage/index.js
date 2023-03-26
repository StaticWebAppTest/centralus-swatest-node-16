module.exports = async function (context, req) {
  const date = "2023-03-26T09:08:32.461Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

