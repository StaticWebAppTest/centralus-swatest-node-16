module.exports = async function (context, req) {
  const date = "2023-07-09T06:12:09.646Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

