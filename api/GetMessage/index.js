module.exports = async function (context, req) {
  const date = "2022-08-28T01:04:27.038Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

