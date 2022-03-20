module.exports = async function (context, req) {
  const date = "2022-03-20T18:12:06.631Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

