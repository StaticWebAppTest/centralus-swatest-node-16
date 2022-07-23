module.exports = async function (context, req) {
  const date = "2022-07-23T17:13:20.015Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

