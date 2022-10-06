module.exports = async function (context, req) {
  const date = "2022-10-06T19:20:37.501Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

