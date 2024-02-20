module.exports = async function (context, req) {
  const date = "2024-02-20T07:09:14.385Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

