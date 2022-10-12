module.exports = async function (context, req) {
  const date = "2022-10-12T07:21:45.004Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

