module.exports = async function (context, req) {
  const date = "2024-09-25T13:21:04.335Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

