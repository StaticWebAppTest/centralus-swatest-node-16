module.exports = async function (context, req) {
  const date = "2022-07-16T03:21:12.627Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

