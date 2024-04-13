module.exports = async function (context, req) {
  const date = "2024-04-13T04:11:03.732Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

