module.exports = async function (context, req) {
  const date = "2024-05-11T17:09:41.969Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

