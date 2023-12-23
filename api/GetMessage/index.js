module.exports = async function (context, req) {
  const date = "2023-12-23T07:08:02.901Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

