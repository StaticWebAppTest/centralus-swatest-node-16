module.exports = async function (context, req) {
  const date = "2022-11-06T05:10:28.619Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

