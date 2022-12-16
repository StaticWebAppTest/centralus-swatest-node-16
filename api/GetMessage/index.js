module.exports = async function (context, req) {
  const date = "2022-12-16T10:09:54.532Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

