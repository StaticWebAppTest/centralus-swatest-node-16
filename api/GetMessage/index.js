module.exports = async function (context, req) {
  const date = "2022-02-27T07:09:32.800Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

