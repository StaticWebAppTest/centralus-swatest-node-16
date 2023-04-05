module.exports = async function (context, req) {
  const date = "2023-04-05T03:09:35.335Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

