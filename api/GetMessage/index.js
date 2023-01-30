module.exports = async function (context, req) {
  const date = "2023-01-30T07:09:12.131Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

