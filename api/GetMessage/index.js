module.exports = async function (context, req) {
  const date = "2022-10-28T01:11:25.997Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

