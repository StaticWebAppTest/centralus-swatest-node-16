module.exports = async function (context, req) {
  const date = "2023-05-19T03:09:14.501Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

