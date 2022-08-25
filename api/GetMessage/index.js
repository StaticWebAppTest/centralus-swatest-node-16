module.exports = async function (context, req) {
  const date = "2022-08-25T09:11:00.363Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

