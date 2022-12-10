module.exports = async function (context, req) {
  const date = "2022-12-10T04:11:31.448Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

