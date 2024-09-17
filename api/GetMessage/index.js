module.exports = async function (context, req) {
  const date = "2024-09-17T07:10:31.748Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

