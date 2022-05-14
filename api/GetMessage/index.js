module.exports = async function (context, req) {
  const date = "2022-05-14T19:09:08.808Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

