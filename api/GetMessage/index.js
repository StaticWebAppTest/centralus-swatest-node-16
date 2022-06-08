module.exports = async function (context, req) {
  const date = "2022-06-08T04:23:50.667Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

