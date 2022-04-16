module.exports = async function (context, req) {
  const date = "2022-04-16T16:13:40.492Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

