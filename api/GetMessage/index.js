module.exports = async function (context, req) {
  const date = "2024-11-20T19:09:45.896Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

