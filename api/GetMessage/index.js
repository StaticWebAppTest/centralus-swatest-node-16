module.exports = async function (context, req) {
  const date = "2022-09-27T05:56:03.540Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

