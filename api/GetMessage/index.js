module.exports = async function (context, req) {
  const date = "2022-10-18T16:24:32.654Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

