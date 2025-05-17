module.exports = async function (context, req) {
  const date = "2025-05-17T11:10:15.748Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

