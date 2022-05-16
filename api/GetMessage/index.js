module.exports = async function (context, req) {
  const date = "2022-05-16T14:12:02.837Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

