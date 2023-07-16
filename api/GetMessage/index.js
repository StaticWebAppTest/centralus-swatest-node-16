module.exports = async function (context, req) {
  const date = "2023-07-16T05:09:05.355Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

