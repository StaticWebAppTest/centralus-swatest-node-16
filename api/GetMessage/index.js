module.exports = async function (context, req) {
  const date = "2022-02-23T22:09:34.111Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

