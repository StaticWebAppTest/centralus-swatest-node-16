module.exports = async function (context, req) {
  const date = "2023-06-20T10:09:09.357Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

