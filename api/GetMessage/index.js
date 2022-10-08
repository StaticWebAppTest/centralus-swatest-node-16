module.exports = async function (context, req) {
  const date = "2022-10-08T13:36:05.446Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

