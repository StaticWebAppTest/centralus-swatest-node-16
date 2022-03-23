module.exports = async function (context, req) {
  const date = "2022-03-23T07:10:18.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

