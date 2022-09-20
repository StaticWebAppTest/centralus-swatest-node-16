module.exports = async function (context, req) {
  const date = "2022-09-20T22:13:27.628Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

