module.exports = async function (context, req) {
  const date = "2023-02-21T06:13:13.915Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

