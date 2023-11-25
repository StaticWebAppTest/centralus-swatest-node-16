module.exports = async function (context, req) {
  const date = "2023-11-25T11:07:04.917Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

