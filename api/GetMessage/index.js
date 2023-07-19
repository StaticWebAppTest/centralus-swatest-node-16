module.exports = async function (context, req) {
  const date = "2023-07-19T06:11:53.660Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

