module.exports = async function (context, req) {
  const date = "2023-10-21T08:10:16.311Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

