module.exports = async function (context, req) {
  const date = "2023-07-13T04:11:49.691Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

