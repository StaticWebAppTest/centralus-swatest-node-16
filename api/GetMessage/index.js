module.exports = async function (context, req) {
  const date = "2022-06-06T08:13:09.384Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

