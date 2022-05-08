module.exports = async function (context, req) {
  const date = "2022-05-08T22:10:06.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

