module.exports = async function (context, req) {
  const date = "2023-09-28T11:07:29.227Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

