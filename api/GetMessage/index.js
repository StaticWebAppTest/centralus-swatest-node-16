module.exports = async function (context, req) {
  const date = "2023-04-03T11:07:33.212Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

