module.exports = async function (context, req) {
  const date = "2023-10-25T10:09:28.895Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

