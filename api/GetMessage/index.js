module.exports = async function (context, req) {
  const date = "2022-10-26T14:19:20.800Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

