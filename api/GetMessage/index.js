module.exports = async function (context, req) {
  const date = "2022-10-09T11:10:41.709Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

