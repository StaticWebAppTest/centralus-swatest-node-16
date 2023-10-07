module.exports = async function (context, req) {
  const date = "2023-10-07T04:10:02.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

