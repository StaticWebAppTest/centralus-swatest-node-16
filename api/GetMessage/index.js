module.exports = async function (context, req) {
  const date = "2023-02-28T04:12:17.660Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

