module.exports = async function (context, req) {
  const date = "2022-05-09T05:15:46.670Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

