module.exports = async function (context, req) {
  const date = "2023-03-03T14:09:15.917Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

