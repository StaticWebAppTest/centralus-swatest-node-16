module.exports = async function (context, req) {
  const date = "2022-07-06T13:45:22.300Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

