module.exports = async function (context, req) {
  const date = "2022-09-08T14:12:06.139Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

