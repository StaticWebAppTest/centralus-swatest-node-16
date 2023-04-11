module.exports = async function (context, req) {
  const date = "2023-04-11T04:10:31.093Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

