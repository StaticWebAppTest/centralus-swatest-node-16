module.exports = async function (context, req) {
  const date = "2023-05-16T02:03:03.211Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

