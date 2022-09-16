module.exports = async function (context, req) {
  const date = "2022-09-16T21:11:25.691Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

