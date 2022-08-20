module.exports = async function (context, req) {
  const date = "2022-08-20T07:10:03.750Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

