module.exports = async function (context, req) {
  const date = "2023-08-11T11:06:54.837Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

