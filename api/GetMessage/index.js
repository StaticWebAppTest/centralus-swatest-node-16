module.exports = async function (context, req) {
  const date = "2023-12-21T10:09:48.385Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

