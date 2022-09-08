module.exports = async function (context, req) {
  const date = "2022-09-08T09:13:09.649Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

