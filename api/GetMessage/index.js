module.exports = async function (context, req) {
  const date = "2024-07-20T18:13:01.557Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

