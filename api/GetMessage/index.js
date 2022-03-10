module.exports = async function (context, req) {
  const date = "2022-03-10T03:15:02.173Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

