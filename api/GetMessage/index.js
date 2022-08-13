module.exports = async function (context, req) {
  const date = "2022-08-13T07:10:12.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

