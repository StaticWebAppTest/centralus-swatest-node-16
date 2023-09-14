module.exports = async function (context, req) {
  const date = "2023-09-14T18:11:19.164Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

