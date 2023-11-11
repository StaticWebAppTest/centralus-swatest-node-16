module.exports = async function (context, req) {
  const date = "2023-11-11T16:10:21.837Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

