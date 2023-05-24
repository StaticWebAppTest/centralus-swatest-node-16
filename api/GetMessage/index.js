module.exports = async function (context, req) {
  const date = "2023-05-24T03:09:39.124Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

