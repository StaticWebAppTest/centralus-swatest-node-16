module.exports = async function (context, req) {
  const date = "2023-12-20T07:07:10.969Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

