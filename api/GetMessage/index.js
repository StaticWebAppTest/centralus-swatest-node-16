module.exports = async function (context, req) {
  const date = "2022-08-04T22:10:45.319Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

