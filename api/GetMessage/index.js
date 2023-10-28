module.exports = async function (context, req) {
  const date = "2023-10-28T23:07:51.917Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

