module.exports = async function (context, req) {
  const date = "2022-05-04T04:24:10.268Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

