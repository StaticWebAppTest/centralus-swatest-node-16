module.exports = async function (context, req) {
  const date = "2022-08-07T09:10:07.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

