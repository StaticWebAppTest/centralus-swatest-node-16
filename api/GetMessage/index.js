module.exports = async function (context, req) {
  const date = "2023-12-30T17:07:24.063Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

