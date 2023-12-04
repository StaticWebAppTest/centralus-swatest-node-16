module.exports = async function (context, req) {
  const date = "2023-12-04T23:09:14.551Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

