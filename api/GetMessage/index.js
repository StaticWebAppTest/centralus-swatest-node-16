module.exports = async function (context, req) {
  const date = "2023-11-03T09:09:06.363Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

