module.exports = async function (context, req) {
  const date = "2023-05-11T23:09:22.212Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

