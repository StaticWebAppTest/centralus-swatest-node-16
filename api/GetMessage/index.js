module.exports = async function (context, req) {
  const date = "2022-09-23T10:13:09.243Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

