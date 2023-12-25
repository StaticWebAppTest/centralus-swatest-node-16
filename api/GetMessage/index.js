module.exports = async function (context, req) {
  const date = "2023-12-25T20:09:21.335Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

