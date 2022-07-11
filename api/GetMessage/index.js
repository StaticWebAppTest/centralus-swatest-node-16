module.exports = async function (context, req) {
  const date = "2022-07-11T05:19:03.162Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

