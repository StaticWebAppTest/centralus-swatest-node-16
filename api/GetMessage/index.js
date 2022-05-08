module.exports = async function (context, req) {
  const date = "2022-05-08T02:49:05.876Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

