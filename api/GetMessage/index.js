module.exports = async function (context, req) {
  const date = "2022-12-10T15:09:06.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

