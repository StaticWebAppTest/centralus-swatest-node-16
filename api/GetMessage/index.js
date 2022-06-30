module.exports = async function (context, req) {
  const date = "2022-06-30T21:09:56.320Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

