module.exports = async function (context, req) {
  const date = "2023-01-25T22:09:24.335Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

