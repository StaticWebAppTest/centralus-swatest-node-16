module.exports = async function (context, req) {
  const date = "2023-10-18T00:41:09.320Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

