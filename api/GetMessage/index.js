module.exports = async function (context, req) {
  const date = "2023-01-06T09:09:36.276Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

