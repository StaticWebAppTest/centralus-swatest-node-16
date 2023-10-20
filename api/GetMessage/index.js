module.exports = async function (context, req) {
  const date = "2023-10-20T03:09:19.060Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

