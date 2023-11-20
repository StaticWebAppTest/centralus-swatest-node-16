module.exports = async function (context, req) {
  const date = "2023-11-20T09:10:24.806Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

