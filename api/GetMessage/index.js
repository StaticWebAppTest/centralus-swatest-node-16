module.exports = async function (context, req) {
  const date = "2022-06-04T12:16:09.969Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

