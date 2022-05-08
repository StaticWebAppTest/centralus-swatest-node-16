module.exports = async function (context, req) {
  const date = "2022-05-08T20:11:02.320Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

