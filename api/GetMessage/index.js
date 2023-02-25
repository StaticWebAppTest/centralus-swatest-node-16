module.exports = async function (context, req) {
  const date = "2023-02-25T16:12:01.335Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

