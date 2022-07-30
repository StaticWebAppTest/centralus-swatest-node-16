module.exports = async function (context, req) {
  const date = "2022-07-30T13:20:33.363Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

