module.exports = async function (context, req) {
  const date = "2022-05-16T23:11:33.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

