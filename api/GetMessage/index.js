module.exports = async function (context, req) {
  const date = "2022-10-14T21:12:53.944Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

