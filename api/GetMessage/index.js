module.exports = async function (context, req) {
  const date = "2022-06-07T07:11:10.654Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

