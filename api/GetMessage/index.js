module.exports = async function (context, req) {
  const date = "2023-11-16T05:09:06.268Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

