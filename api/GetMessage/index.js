module.exports = async function (context, req) {
  const date = "2023-02-24T16:13:25.604Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

