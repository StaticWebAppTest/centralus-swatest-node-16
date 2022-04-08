module.exports = async function (context, req) {
  const date = "2022-04-08T17:15:02.991Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

