module.exports = async function (context, req) {
  const date = "2022-08-08T07:10:01.246Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

