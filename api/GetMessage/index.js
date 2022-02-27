module.exports = async function (context, req) {
  const date = "2022-02-27T06:11:48.705Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

