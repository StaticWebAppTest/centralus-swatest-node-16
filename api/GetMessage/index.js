module.exports = async function (context, req) {
  const date = "2023-04-07T07:08:09.800Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

