module.exports = async function (context, req) {
  const date = "2022-06-11T04:14:50.631Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

