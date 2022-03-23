module.exports = async function (context, req) {
  const date = "2022-03-23T06:13:21.583Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

