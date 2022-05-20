module.exports = async function (context, req) {
  const date = "2022-05-20T04:20:18.093Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

