module.exports = async function (context, req) {
  const date = "2023-07-16T16:11:29.020Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

