module.exports = async function (context, req) {
  const date = "2022-10-06T04:36:23.021Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

