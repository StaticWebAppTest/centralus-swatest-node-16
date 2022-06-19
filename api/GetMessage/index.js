module.exports = async function (context, req) {
  const date = "2022-06-19T04:24:13.722Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

