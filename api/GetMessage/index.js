module.exports = async function (context, req) {
  const date = "2023-07-17T16:12:40.969Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

