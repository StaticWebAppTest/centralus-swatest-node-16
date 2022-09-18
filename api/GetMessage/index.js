module.exports = async function (context, req) {
  const date = "2022-09-18T05:37:08.654Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

