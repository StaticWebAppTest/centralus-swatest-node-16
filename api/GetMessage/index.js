module.exports = async function (context, req) {
  const date = "2022-06-29T06:13:45.602Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

