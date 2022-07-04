module.exports = async function (context, req) {
  const date = "2022-07-04T23:10:04.128Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

