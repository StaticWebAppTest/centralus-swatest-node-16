module.exports = async function (context, req) {
  const date = "2022-12-25T13:12:26.060Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

