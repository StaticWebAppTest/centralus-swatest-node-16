module.exports = async function (context, req) {
  const date = "2023-12-08T05:09:09.212Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

