module.exports = async function (context, req) {
  const date = "2023-09-20T05:08:09.848Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

