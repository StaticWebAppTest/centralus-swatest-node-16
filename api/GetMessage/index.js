module.exports = async function (context, req) {
  const date = "2022-11-20T09:10:20.136Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

