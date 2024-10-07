module.exports = async function (context, req) {
  const date = "2024-10-07T05:13:05.335Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

