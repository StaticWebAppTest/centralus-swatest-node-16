module.exports = async function (context, req) {
  const date = "2023-09-06T05:08:14.691Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

