module.exports = async function (context, req) {
  const date = "2022-05-16T18:14:18.855Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

