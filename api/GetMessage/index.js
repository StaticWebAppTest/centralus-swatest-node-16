module.exports = async function (context, req) {
  const date = "2022-07-04T07:10:06.901Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

