module.exports = async function (context, req) {
  const date = "2022-02-23T10:10:40.901Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

