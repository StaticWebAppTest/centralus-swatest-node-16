module.exports = async function (context, req) {
  const date = "2023-08-08T10:09:09.173Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

