module.exports = async function (context, req) {
  const date = "2022-06-10T23:11:06.099Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

