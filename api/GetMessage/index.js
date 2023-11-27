module.exports = async function (context, req) {
  const date = "2023-11-27T04:11:28.322Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

