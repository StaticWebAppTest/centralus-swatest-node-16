module.exports = async function (context, req) {
  const date = "2022-05-09T09:11:59.785Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

