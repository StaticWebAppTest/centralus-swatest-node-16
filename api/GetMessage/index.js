module.exports = async function (context, req) {
  const date = "2023-10-26T02:15:19.267Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

