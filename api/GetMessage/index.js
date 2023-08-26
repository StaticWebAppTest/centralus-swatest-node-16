module.exports = async function (context, req) {
  const date = "2023-08-26T06:10:02.320Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

