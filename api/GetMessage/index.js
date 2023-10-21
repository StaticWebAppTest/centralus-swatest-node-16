module.exports = async function (context, req) {
  const date = "2023-10-21T03:08:56.790Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

