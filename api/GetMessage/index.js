module.exports = async function (context, req) {
  const date = "2022-12-12T23:10:27.901Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

