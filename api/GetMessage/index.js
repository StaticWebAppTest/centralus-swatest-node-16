module.exports = async function (context, req) {
  const date = "2022-10-24T04:25:31.666Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

