module.exports = async function (context, req) {
  const date = "2022-06-04T04:12:15.130Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

