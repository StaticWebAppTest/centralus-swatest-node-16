module.exports = async function (context, req) {
  const date = "2022-07-23T04:24:46.168Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

