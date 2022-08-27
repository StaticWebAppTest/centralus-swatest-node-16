module.exports = async function (context, req) {
  const date = "2022-08-27T06:13:18.360Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

