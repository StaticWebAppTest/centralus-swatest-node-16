module.exports = async function (context, req) {
  const date = "2023-08-27T04:09:44.675Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

