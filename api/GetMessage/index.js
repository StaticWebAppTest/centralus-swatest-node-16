module.exports = async function (context, req) {
  const date = "2022-12-20T00:50:45.779Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

