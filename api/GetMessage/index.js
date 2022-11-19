module.exports = async function (context, req) {
  const date = "2022-11-19T05:09:40.162Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

