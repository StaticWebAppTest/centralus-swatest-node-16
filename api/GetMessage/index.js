module.exports = async function (context, req) {
  const date = "2022-05-18T23:12:09.709Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

