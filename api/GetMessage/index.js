module.exports = async function (context, req) {
  const date = "2022-12-22T19:07:25.501Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

