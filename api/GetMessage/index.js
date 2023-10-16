module.exports = async function (context, req) {
  const date = "2023-10-16T04:10:55.571Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

