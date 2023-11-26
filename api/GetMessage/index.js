module.exports = async function (context, req) {
  const date = "2023-11-26T14:07:20.121Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

