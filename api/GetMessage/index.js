module.exports = async function (context, req) {
  const date = "2023-10-05T06:12:15.430Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

