module.exports = async function (context, req) {
  const date = "2022-03-24T04:13:25.665Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

