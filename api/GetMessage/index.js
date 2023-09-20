module.exports = async function (context, req) {
  const date = "2023-09-20T18:11:31.276Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

