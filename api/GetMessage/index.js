module.exports = async function (context, req) {
  const date = "2023-05-16T04:11:03.201Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

