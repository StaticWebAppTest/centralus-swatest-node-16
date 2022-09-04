module.exports = async function (context, req) {
  const date = "2022-09-04T11:09:10.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

