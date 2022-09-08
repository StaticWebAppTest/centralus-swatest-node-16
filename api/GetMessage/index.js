module.exports = async function (context, req) {
  const date = "2022-09-08T06:42:40.677Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

