module.exports = async function (context, req) {
  const date = "2022-06-08T07:11:05.103Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

