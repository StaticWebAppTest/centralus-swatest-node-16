module.exports = async function (context, req) {
  const date = "2023-03-18T02:07:17.501Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

