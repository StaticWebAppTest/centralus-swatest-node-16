module.exports = async function (context, req) {
  const date = "2022-02-26T07:09:00.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

