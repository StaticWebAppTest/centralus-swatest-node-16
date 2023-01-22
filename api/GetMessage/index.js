module.exports = async function (context, req) {
  const date = "2023-01-22T07:08:07.169Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

