module.exports = async function (context, req) {
  const date = "2024-03-07T14:09:28.538Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

