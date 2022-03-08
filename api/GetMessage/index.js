module.exports = async function (context, req) {
  const date = "2022-03-08T10:10:50.267Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

