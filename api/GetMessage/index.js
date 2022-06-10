module.exports = async function (context, req) {
  const date = "2022-06-10T05:09:23.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

