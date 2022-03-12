module.exports = async function (context, req) {
  const date = "2022-03-12T07:09:34.911Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

