module.exports = async function (context, req) {
  const date = "2022-09-20T21:10:17.178Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

