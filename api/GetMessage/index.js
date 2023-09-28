module.exports = async function (context, req) {
  const date = "2023-09-28T10:09:14.311Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

