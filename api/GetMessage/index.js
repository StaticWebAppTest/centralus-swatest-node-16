module.exports = async function (context, req) {
  const date = "2023-09-04T04:10:40.015Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

