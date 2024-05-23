module.exports = async function (context, req) {
  const date = "2024-05-23T14:09:15.917Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

