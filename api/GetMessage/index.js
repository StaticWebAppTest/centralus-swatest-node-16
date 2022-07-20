module.exports = async function (context, req) {
  const date = "2022-07-20T23:11:40.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

