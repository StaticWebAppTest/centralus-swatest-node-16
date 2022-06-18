module.exports = async function (context, req) {
  const date = "2022-06-18T06:12:21.915Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

