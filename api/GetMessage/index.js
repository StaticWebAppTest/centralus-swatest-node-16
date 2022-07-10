module.exports = async function (context, req) {
  const date = "2022-07-10T06:13:15.300Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

