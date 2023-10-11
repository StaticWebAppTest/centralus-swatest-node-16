module.exports = async function (context, req) {
  const date = "2023-10-11T05:08:21.855Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

