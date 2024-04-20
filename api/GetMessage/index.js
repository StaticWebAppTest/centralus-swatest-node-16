module.exports = async function (context, req) {
  const date = "2024-04-20T15:09:11.335Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

