module.exports = async function (context, req) {
  const date = "2022-03-27T08:11:59.750Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

