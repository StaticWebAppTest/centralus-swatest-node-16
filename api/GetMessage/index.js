module.exports = async function (context, req) {
  const date = "2024-10-28T10:13:25.917Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

