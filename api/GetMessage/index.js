module.exports = async function (context, req) {
  const date = "2022-09-08T21:11:19.654Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

