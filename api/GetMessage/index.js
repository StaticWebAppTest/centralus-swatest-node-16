module.exports = async function (context, req) {
  const date = "2022-12-08T16:13:33.932Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

