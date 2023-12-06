module.exports = async function (context, req) {
  const date = "2023-12-06T04:11:44.796Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

