module.exports = async function (context, req) {
  const date = "2023-08-21T11:06:58.452Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

