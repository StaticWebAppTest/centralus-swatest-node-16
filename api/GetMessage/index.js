module.exports = async function (context, req) {
  const date = "2023-11-03T06:11:56.830Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

