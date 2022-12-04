module.exports = async function (context, req) {
  const date = "2022-12-04T08:11:51.722Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

