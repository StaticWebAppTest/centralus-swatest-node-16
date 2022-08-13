module.exports = async function (context, req) {
  const date = "2022-08-13T05:09:42.969Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

