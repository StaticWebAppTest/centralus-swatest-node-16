module.exports = async function (context, req) {
  const date = "2022-09-04T01:02:54.810Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

