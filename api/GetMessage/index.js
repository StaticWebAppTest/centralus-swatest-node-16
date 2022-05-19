module.exports = async function (context, req) {
  const date = "2022-05-19T21:10:21.230Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

