module.exports = async function (context, req) {
  const date = "2022-06-23T06:13:04.177Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

