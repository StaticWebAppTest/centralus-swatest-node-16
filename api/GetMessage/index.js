module.exports = async function (context, req) {
  const date = "2022-08-20T20:11:33.627Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

