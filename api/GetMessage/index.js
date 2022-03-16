module.exports = async function (context, req) {
  const date = "2022-03-16T05:09:33.470Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

