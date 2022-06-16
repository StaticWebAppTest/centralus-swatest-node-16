module.exports = async function (context, req) {
  const date = "2022-06-16T23:11:30.644Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

